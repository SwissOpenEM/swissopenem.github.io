import { rename, writeFile } from "node:fs/promises";

const apiEndpoint = "https://dacat.psi.ch/api/v3/datasets/fullquery";
const searchUrl =
  "https://discovery.psi.ch/datasets?args=%7B%22skip%22:0,%22limit%22:25%7D&searchQuery=%7B%22keywords%22:%5B%22OpenEM%22%5D%7D";
const outputUrl = new URL("../_data/openem_datasets.json", import.meta.url);
const temporaryUrl = new URL("../_data/openem_datasets.json.tmp", import.meta.url);

const pageSize = 100;
const maximumPages = 100;
const datasets = [];

for (let pageNumber = 0; pageNumber < maximumPages; pageNumber += 1) {
  const apiUrl = new URL(apiEndpoint);
  apiUrl.searchParams.set(
    "limits",
    JSON.stringify({
      skip: pageNumber * pageSize,
      limit: pageSize,
      order: "createdAt:desc",
    }),
  );
  apiUrl.searchParams.set("fields", JSON.stringify({ keywords: ["OpenEM"] }));

  const response = await fetch(apiUrl, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(30_000),
  });

  if (!response.ok) {
    throw new Error(`PSI Data Catalog returned HTTP ${response.status}`);
  }

  const items = await response.json();
  if (!Array.isArray(items)) {
    throw new TypeError("PSI Data Catalog returned an unexpected response");
  }

  datasets.push(...items);

  if (items.length < pageSize) {
    break;
  }

  if (pageNumber === maximumPages - 1) {
    throw new Error("PSI Data Catalog pagination exceeded its safety limit");
  }
}

function displaySize(bytes) {
  const units = ["bytes", "KB", "MB", "GB", "TB"];
  let value = Number(bytes) || 0;
  let unit = 0;

  while (value >= 1000 && unit < units.length - 1) {
    value /= 1000;
    unit += 1;
  }

  const formatted = new Intl.NumberFormat("en", {
    maximumFractionDigits: unit === 0 ? 0 : 2,
  }).format(value);

  return `${formatted} ${units[unit]}`;
}

const publicFields = datasets.map((dataset) => ({
  pid: dataset.pid,
  datasetName: dataset.datasetName,
  description: dataset.description,
  type: dataset.type,
  creationLocation: dataset.creationLocation,
  createdAt: dataset.createdAt,
  size: dataset.size,
  sizeDisplay: displaySize(dataset.size),
  keywords: dataset.keywords ?? [],
}));

const output = `${JSON.stringify({ searchUrl, datasets: publicFields }, null, 2)}\n`;

await writeFile(temporaryUrl, output, "utf8");
await rename(temporaryUrl, outputUrl);

//import * as google from 'https://www.gstatic.com/charts/loader.js';

google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawAllCharts);

function loadYMLData(timeline) {
  var rows = timeline.map( (task) => [
      task.task_id,
      task.task_name,
      task.resource,
      new Date(task.start_date),
      new Date(task.end_date),
      null,
      task.percent_complete,
      task.dependencies
    ]);

  return rows;
}

function drawChart(parent, ymldata) {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Task ID');
  data.addColumn('string', 'Task Name');
  data.addColumn('string', 'Resource');
  data.addColumn('date', 'Start Date');
  data.addColumn('date', 'End Date');
  data.addColumn('number', 'Duration');
  data.addColumn('number', 'Percent Complete');
  data.addColumn('string', 'Dependencies');

  var rows = loadYMLData(ymldata);
  data.addRows(rows);

  var options = {
    height: 42*rows.length+42,
    gantt: {
      criticalPathEnabled: false,
      arrow: {
        angle: 100,
        width: 5,
        color: 'green',
        radius: 0
      }
    }
  };

  var chart = new google.visualization.Gantt(parent);
  chart.draw(data, options);
}

function drawAllCharts() {
  document.querySelectorAll("div[data-gantt]").forEach((parent) => {
    const encoded = parent.getAttribute('data-gantt');
    const decoded = decodeURIComponent(encoded);
    const data = JSON.parse(decoded);
    drawChart(parent, data);
  });
}

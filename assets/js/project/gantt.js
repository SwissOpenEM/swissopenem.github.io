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
    backgroundColor: '#ffffff',
    gantt: {
      criticalPathEnabled: false,
      labelStyle: { fontName: 'Inter', fontSize: 13, color: '#123b43' },
      innerGridHorizLine: { stroke: '#d4e3e4', strokeWidth: 1 },
      innerGridTrack: { fill: '#ffffff' },
      innerGridDarkTrack: { fill: '#f3f9f8' },
      shadowEnabled: false,
      palette: [
        { color: '#3973b9', dark: '#24528a', light: '#eaf1fa' },
        { color: '#9363b8', dark: '#6c408e', light: '#f3edf8' },
        { color: '#c58a22', dark: '#916012', light: '#fbf3e3' },
        { color: '#31946a', dark: '#216b4c', light: '#e8f5ee' },
        { color: '#c75b62', dark: '#963e48', light: '#faecee' }
      ],
      arrow: {
        angle: 100,
        width: 5,
        color: '#12636d',
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
    const data = JSON.parse(encoded);
    drawChart(parent, data);
    let width = parent.clientWidth;
    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(function () {
        if (parent.clientWidth !== width) {
          width = parent.clientWidth;
          drawChart(parent, data);
        }
      }).observe(parent);
    }
  });
}

// Example locale file for English, give this to your locale team to translate

const AG_GRID_LOCALE_EN = {
  // Set Filter
  selectAll: '(全选)', // Select All
  selectAllSearchResults: '(Select All Search Results)', // Select All Search Results
  searchOoo: '搜索...',
  blanks: '(Blanks)',
  noMatches: 'No matches',

  // Number Filter & Text Filter
  filterOoo: '搜索...', // Filter
  equals: 'Equals', // Equals
  notEqual: 'Not equal', // Not equal
  empty: 'Choose One', // Choose One

  // Number Filter
  lessThan: 'Less than', // Less than
  greaterThan: 'Greater than', // Greater than
  lessThanOrEqual: 'Less than or equal', // Less than or equal
  greaterThanOrEqual: 'Greater than or equal', // Greater than or equal
  inRange: 'In range',
  inRangeStart: 'to',
  inRangeEnd: 'from',

  // Text Filter
  contains: 'Contains',
  notContains: 'Not contains',
  startsWith: 'Starts with',
  endsWith: 'Ends with',

  // Date Filter
  dateFormatOoo: 'yyyy-mm-dd',

  // Filter Conditions
  andCondition: 'AND',
  orCondition: 'OR',

  // Filter Buttons
  applyFilter: '确定', // Apply
  resetFilter: '重置', // Reset
  clearFilter: '清除', // Clear
  cancelFilter: '取消', // Cancel

  // Filter Titles
  textFilter: 'Text Filter',
  numberFilter: 'Number Filter',
  dateFilter: 'Date Filter',
  setFilter: 'Set Filter',

  // Side Bar
  columns: '列设置', // Columns
  filters: '过滤数据', // Filters

  // columns tool panel
  pivotMode: '枢轴模式', // Pivot Mode
  groups: '行分组', // Row Groups
  rowGroupColumnsEmptyMessage: '拖到此处设置行组', // Drag here to set row groups
  values: '值', // Values
  valueColumnsEmptyMessage: '拖到此处进行汇总', // Drag here to aggregate
  pivots: 'Column Labels',
  pivotColumnsEmptyMessage: 'Drag here to set column labels',

  // Header of the Default Group Column
  group: '分组',

  // Other
  loadingOoo: '加载中...', // Loading
  noRowsToShow: '暂无数据', // No Rows To Show
  enabled: 'Enabled',

  // Menu
  pinColumn: '锁定列', // Pin Column
  pinLeft: '左边', // Pin Left
  pinRight: '右边', // Pin Right
  noPin: '取消锁定', // No Pin
  valueAggregation: 'Value Aggregation',
  autosizeThiscolumn: '自动调整此列 ', // Autosize This Column
  autosizeAllColumns: '自动调整所有列', // Autosize All Columns
  groupBy: 'Group by',
  ungroupBy: 'Un-Group by',
  resetColumns: '重置列', // Reset Columns
  expandAll: 'Expand All',
  collapseAll: 'Close All',
  copy: '复制', // Copy
  ctrlC: 'Ctrl+C',
  copyWithHeaders: '复制+表头', // Copy With Headers
  paste: '粘贴', // Paste
  ctrlV: 'Ctrl+V',
  export: '导出', // Export
  csvExport: '导出CSV', // CSV Export
  excelExport: '导出Excel(.xlsx)', // Excel Export (.xlsx)
  excelXmlExport: '导出Excel(.xml)', // Excel Export (.xml)

  // Enterprise Menu Aggregation and Status Bar
  sum: 'Sum',
  min: 'Min',
  max: 'Max',
  none: 'None',
  count: 'Count',
  avg: 'Average',
  filteredRows: 'Filtered',
  selectedRows: 'Selected',
  totalRows: 'Total Rows',
  totalAndFilteredRows: 'Rows',
  more: 'More',
  to: 'to',
  of: 'of',
  page: 'Page',
  nextPage: '下一页', // Next Page
  lastPage: '最后一页', // Last Page
  firstPage: '第一页', // First Page
  previousPage: 'Previous Page',

  // Enterprise Menu (Charts)
  pivotChartAndPivotMode: 'Pivot Chart & Pivot Mode',
  pivotChart: 'Pivot Chart',
  chartRange: '构建图表', // Chart Range

  columnChart: '垂直柱形图', // Column
  groupedColumn: '分组', // Grouped
  stackedColumn: '堆叠式', // Stacked
  normalizedColumn: '100% Stacked',

  barChart: '水平柱形图', // Bar
  groupedBar: '分组', // Grouped
  stackedBar: 'Stacked',
  normalizedBar: '100% Stacked',

  pieChart: '饼状图', // Pie
  pie: '饼状', // Pie
  doughnut: 'Doughnut',

  line: '线性图', // Line

  xyChart: 'X Y (Scatter)',
  scatter: 'Scatter',
  bubble: 'Bubble',

  areaChart: '线性区域', // Area
  area: 'Area',
  stackedArea: 'Stacked',
  normalizedArea: '100% Stacked',

  histogramChart: '柱形区域', // Histogram

  // Charts
  pivotChartTitle: '数据透视图表', // Pivot Chart
  rangeChartTitle: '极差图', // Range Chart
  settings: '设置', // Settings
  data: 'Data',
  format: 'Format',
  categories: 'Categories',
  defaultCategory: '(None)',
  series: 'Series',
  xyValues: 'X Y Values',
  paired: 'Paired Mode',
  axis: 'Axis',
  navigator: 'Navigator',
  color: 'Color',
  thickness: 'Thickness',
  xType: 'X Type',
  automatic: 'Automatic',
  category: 'Category',
  number: 'Number',
  time: 'Time',
  xRotation: 'X Rotation',
  yRotation: 'Y Rotation',
  ticks: 'Ticks',
  width: 'Width',
  height: 'Height',
  length: 'Length',
  padding: 'Padding',
  spacing: 'Spacing',
  chart: 'Chart',
  title: 'Title',
  titlePlaceholder: 'Chart title - double click to edit',
  background: 'Background',
  font: 'Font',
  top: 'Top',
  right: 'Right',
  bottom: 'Bottom',
  left: 'Left',
  labels: 'Labels',
  size: 'Size',
  minSize: 'Minimum Size',
  maxSize: 'Maximum Size',
  legend: 'Legend',
  position: 'Position',
  markerSize: 'Marker Size',
  markerStroke: 'Marker Stroke',
  markerPadding: 'Marker Padding',
  itemSpacing: 'Item Spacing',
  itemPaddingX: 'Item Padding X',
  itemPaddingY: 'Item Padding Y',
  layoutHorizontalSpacing: 'Horizontal Spacing',
  layoutVerticalSpacing: 'Vertical Spacing',
  strokeWidth: 'Stroke Width',
  offset: 'Offset',
  offsets: 'Offsets',
  tooltips: 'Tooltips',
  callout: 'Callout',
  markers: 'Markers',
  shadow: 'Shadow',
  blur: 'Blur',
  xOffset: 'X Offset',
  yOffset: 'Y Offset',
  lineWidth: 'Line Width',
  normal: 'Normal',
  bold: 'Bold',
  italic: 'Italic',
  boldItalic: 'Bold Italic',
  predefined: 'Predefined',
  fillOpacity: 'Fill Opacity',
  strokeOpacity: 'Line Opacity',
  histogramBinCount: 'Bin count',
  columnGroup: 'Column',
  barGroup: 'Bar',
  pieGroup: 'Pie',
  lineGroup: 'Line',
  scatterGroup: 'X Y (Scatter)',
  areaGroup: 'Area',
  histogramGroup: 'Histogram',
  groupedColumnTooltip: 'Grouped',
  stackedColumnTooltip: 'Stacked',
  normalizedColumnTooltip: '100% Stacked',
  groupedBarTooltip: 'Grouped',
  stackedBarTooltip: 'Stacked',
  normalizedBarTooltip: '100% Stacked',
  pieTooltip: 'Pie',
  doughnutTooltip: 'Doughnut',
  lineTooltip: 'Line',
  groupedAreaTooltip: 'Area',
  stackedAreaTooltip: 'Stacked',
  normalizedAreaTooltip: '100% Stacked',
  scatterTooltip: 'Scatter',
  bubbleTooltip: 'Bubble',
  histogramTooltip: '柱状图', // Histogram
  noDataToChart: '没有可用数据来绘制图表', // No data available to be charted
  pivotChartRequiresPivotMode: '透视图需要启用透视模式' // Pivot Chart requires Pivot Mode enabled
}

export default AG_GRID_LOCALE_EN

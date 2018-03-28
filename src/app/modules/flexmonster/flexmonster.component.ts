import { Component, ElementRef, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'fm-pivot',
  template: "<div><div class='fm-ng-wrapper'></div></div>"
})
export class FlexmonsterPivot {
  // params
  @Input() toolbar: boolean;
  @Input() licenseKey: string;
  @Input() width: string | number;
  @Input() height: string | number;
  @Input() componentFolder: string;
  @Input() report: Flexmonster.Report | string;
  @Input() global: Flexmonster.Report;
  @Input() customizeCell: (cell: Flexmonster.CellBuilder, data: Flexmonster.Cell) => void;
  // events
  @Output() cellclick: EventEmitter<Flexmonster.Cell> = new EventEmitter();
  @Output() celldoubleclick: EventEmitter<Flexmonster.Cell> = new EventEmitter();
  @Output() dataerror: EventEmitter<Object> = new EventEmitter();
  @Output() datafilecancelled: EventEmitter<Object> = new EventEmitter();
  @Output() dataloaded: EventEmitter<Object> = new EventEmitter();
  @Output() datachanged: EventEmitter<Object> = new EventEmitter();
  @Output() fieldslistclose: EventEmitter<Object> = new EventEmitter();
  @Output() fieldslistopen: EventEmitter<Object> = new EventEmitter();
  @Output() filteropen: EventEmitter<Object> = new EventEmitter();
  @Output() fullscreen: EventEmitter<Object> = new EventEmitter();
  @Output() loadingdata: EventEmitter<Object> = new EventEmitter();
  @Output() loadinglocalization: EventEmitter<Object> = new EventEmitter();
  @Output() loadingolapstructure: EventEmitter<Object> = new EventEmitter();
  @Output() loadingreportfile: EventEmitter<Object> = new EventEmitter();
  @Output() localizationerror: EventEmitter<Object> = new EventEmitter();
  @Output() localizationloaded: EventEmitter<Object> = new EventEmitter();
  @Output() olapstructureerror: EventEmitter<Object> = new EventEmitter();
  @Output() olapstructureloaded: EventEmitter<Object> = new EventEmitter();
  @Output() openingreportfile: EventEmitter<Object> = new EventEmitter();
  @Output() querycomplete: EventEmitter<Object> = new EventEmitter();
  @Output() queryerror: EventEmitter<Object> = new EventEmitter();
  @Output() ready: EventEmitter<Flexmonster.Pivot> = new EventEmitter();
  @Output() reportchange: EventEmitter<Object> = new EventEmitter();
  @Output() reportcomplete: EventEmitter<Object> = new EventEmitter();
  @Output() reportfilecancelled: EventEmitter<Object> = new EventEmitter();
  @Output() reportfileerror: EventEmitter<Object> = new EventEmitter();
  @Output() reportfileloaded: EventEmitter<Object> = new EventEmitter();
  @Output() runningquery: EventEmitter<Object> = new EventEmitter();
  @Output() update: EventEmitter<Object> = new EventEmitter();
  @Output() beforetoolbarcreated: EventEmitter<Object> = new EventEmitter();
  @Output() aftergriddraw: EventEmitter<Object> = new EventEmitter();
  @Output() beforegriddraw: EventEmitter<Object> = new EventEmitter();
  // api
  public flexmonster: Flexmonster.Pivot;
  // private
  private root: HTMLElement;

  constructor(el: ElementRef) {
    this.root = <HTMLElement>el.nativeElement;
  }

  ngOnInit() {
    this.flexmonster = window["Flexmonster"]({
      container: this.root.getElementsByClassName("fm-ng-wrapper")[0],
      componentFolder: this.componentFolder,
      width: this.width,
      height: this.height,
      toolbar: this.toolbar,
      licenseKey: this.licenseKey,
      report: this.report,
      global: this.global,
      customizeCell: this.customizeCell,
      cellclick: (cell: Flexmonster.Cell) => this.cellclick.next(cell),
      celldoubleclick: (cell: Flexmonster.Cell) => this.celldoubleclick.next(cell),
      dataerror: (event: Object) => this.dataerror.next(event),
      datafilecancelled: (event: Object) => this.datafilecancelled.next(event),
      dataloaded: (event: Object) => this.dataloaded.next(event),
      datachanged: (event: Object) => this.datachanged.next(event),
      fieldslistclose: (event: Object) => this.fieldslistclose.next(event),
      fieldslistopen: (event: Object) => this.fieldslistopen.next(event),
      filteropen: (event: Object) => this.filteropen.next(event),
      fullscreen: (event: Object) => this.fullscreen.next(event),
      loadingdata: (event: Object) => this.loadingdata.next(event),
      loadinglocalization: (event: Object) => this.loadinglocalization.next(event),
      loadingolapstructure: (event: Object) => this.loadingolapstructure.next(event),
      loadingreportfile: (event: Object) => this.loadingreportfile.next(event),
      localizationerror: (event: Object) => this.localizationerror.next(event),
      localizationloaded: (event: Object) => this.localizationloaded.next(event),
      olapstructureerror: (event: Object) => this.olapstructureerror.next(event),
      olapstructureloaded: (event: Object) => this.olapstructureloaded.next(event),
      openingreportfile: (event: Object) => this.openingreportfile.next(event),
      querycomplete: (event: Object) => this.querycomplete.next(event),
      queryerror: (event: Object) => this.queryerror.next(event),
      ready: () => this.ready.next(this.flexmonster),
      reportchange: (event: Object) => this.reportchange.next(event),
      reportcomplete: (event: Object) => this.reportcomplete.next(event),
      reportfilecancelled: (event: Object) => this.reportfilecancelled.next(event),
      reportfileerror: (event: Object) => this.reportfileerror.next(event),
      reportfileloaded: (event: Object) => this.reportfileloaded.next(event),
      runningquery: (event: Object) => this.runningquery.next(event),
      update: (event: Object) => this.update.next(event),
      beforetoolbarcreated: (toolbar: Object) => this.beforetoolbarcreated.next(toolbar),
      aftergriddraw: (event: Object) => this.aftergriddraw.next(event),
      beforegriddraw: (event: Object) => this.beforegriddraw.next(event)
    });
  }
}

export module Flexmonster {
  export interface Params {
    // params
    toolbar?: boolean;
    licenseKey?: string;
    width?: string | number;
    height?: string | number;
    componentFolder?: string;
    report?: Report | string;
    global?: Report;
    customizeCell?: (cell: Flexmonster.CellBuilder, data: Flexmonster.Cell) => void;
    // events
    cellclick?: Function;
    celldoubleclick?: Function;
    dataerror?: Function;
    datafilecancelled?: Function;
    dataloaded?: Function;
    datachanged?: Function;
    fieldslistclose?: Function;
    fieldslistopen?: Function;
    filteropen?: Function;
    fullscreen?: Function;
    loadingdata?: Function;
    loadinglocalization?: Function;
    loadingolapstructure?: Function;
    loadingreportfile?: Function;
    localizationerror?: Function;
    localizationloaded?: Function;
    olapstructureerror?: Function;
    olapstructureloaded?: Function;
    openingreportfile?: Function;
    querycomplete?: Function;
    queryerror?: Function;
    ready?: Function;
    reportchange?: Function;
    reportcomplete?: Function;
    reportfilecancelled?: Function;
    reportfileerror?: Function;
    reportfileloaded?: Function;
    runningquery?: Function;
    update?: Function;
    beforetoolbarcreated?: Function;
    aftergriddraw?: Function;
    beforegriddraw?: Function;
    // other
    container?: Element | string;
  }

  export interface Pivot {
    addCalculatedMeasure(measure: Measure): void;
    addCondition(condition: ConditionalFormat): void;
    addJSON(json: Object[]): void;
    clear(): void;
    clearFilter(hierarchyName: string): void;
    clearXMLACache(proxyUrl: string, databaseId: string, callbackHandler: any, cubeId: string, measuresGroupId: string, username?: string, password?: string): void;
    closeFieldsList(): void;
    collapseAllData(): void;
    collapseData(hierarchyName: string): void;
    connectTo(object: DataSourceParams, callbackHandler: Function | string): void;
    dispose(): void;
    expandAllData(withAllChildren?: boolean): void;
    expandData(hierarchyName: string): void;
    exportTo(type: string, exportOptions?: ExportOptions, callbackHandler?: Function | string): void;
    getAllConditions(): ConditionalFormat[];
    getAllMeasures(): Measure[];
    getAllHierarchies(): Hierarchy[];
    getCell(rowIdx: number, colIdx: number): Cell;
    getColumns(): Hierarchy[];
    getCondition(id: string): ConditionalFormat;
    getData(options: { slice?: Slice }, callbackHandler: Function | string, updateHandler?: Function | string): void;
    getFilter(hierarchyName: string): FilterItem[];
    getFilterProperties(hierarchyName: string): FilterProperties;
    getFormat(measureName: string): Format;
    getMeasures(): Measure[];
    getMembers(hierarchyName: string, memberName: string, callbackHandler: Function | string): Member[];
    getOptions(): Options;
    getReportFilters(): Hierarchy[];
    getReport(format?: string): Report | string;
    getRows(): Hierarchy[];
    getSelectedCell(): Cell;
    getSort(hierarchyName: string): string;
    getXMLACatalogs(proxyURL: string, dataSource: string, callbackHandler: Function | string, username?: string, password?: string): void;
    getXMLACubes(proxyURL: string, dataSource: string, catalog: string, callbackHandler: Function | string, username?: string, password?: string): void;
    getXMLADataSources(proxyURL: string, callbackHandler: Function | string, username?: string, password?: string): void;
    getXMLAProviderName(proxyURL: string, callbackHandler: Function | string, username?: string, password?: string): string;
    load(url: string, componentFolder?: string): void;
    on(eventType: string, handler: Function | string): void;
    off(eventType: string, handler?: Function | string): void;
    open(): void;
    openFieldsList(): void;
    print(options?: PrintOptions): void;
    refresh(): void;
    removeAllCalculatedMeasures(): void;
    removeAllConditions(): void;
    removeCondition(id: string): void;
    removeCalculatedMeasure(uniqueName: string): void;
    removeSelection(): void;
    runQuery(slice: Slice): void;
    save(filename: string, destination: string, callbackHandler?: Function | string, url?: string, embedData?: boolean): string;
    setBottomX(hierarchyName: string, num: number, measureName: string): void;
    setFilter(hierarchyName: string, items: string[], negation?: boolean): void;
    setFormat(format: Format, measureName: string): void;
    setOptions(options: Options): void;
    setReport(report: Report): void;
    setSort(hierarchyName: string, sortName: string, customSorting?: string[]): void;
    setTopX(hierarchyName: string, num: number, measureName: string): void;
    showCharts(type?: string, multiple?: boolean): void;
    showGrid(): void;
    showGridAndCharts(type?: string, position?: string, multiple?: boolean): void;
    sortValues(axisName: string, type: string, tuple: number[], measureName: string): void;
    updateData(object: DataSourceParams | Object[]): void;
    version: number;
    customizeCell(customizeCellFunction: (cell: CellBuilder, data: Cell) => void): void;
    fusioncharts?: {
      getData(options: { type: string; slice?: Slice; prepareDataFunction?: Function }, callbackHandler: Function, updateHandler?: Function): void;
      getNumberFormat(format: Object): Object;
    };
    googlecharts?: {
      getData(options: { type?: string; slice?: Slice; prepareDataFunction?: Function }, callbackHandler: Function, updateHandler?: Function): void;
      getNumberFormat(format: Object): Object;
      getNumberFormatPattern(format: Object): string;
    };
    highcharts?: {
      getData(options: { type?: string; slice?: Slice; xAxisType?: string; valuesOnly?: boolean, withDrilldown?: boolean, prepareDataFunction?: Function }, callbackHandler: Function, updateHandler?: Function): void;
      getAxisFormat(format: Object): string;
      getPointXFormat(format: Object): string;
      getPointYFormat(format: Object): string;
      getPointZFormat(format: Object): string;
    }
  }

  export interface Report {
    dataSource?: DataSourceParams;
    slice?: Slice;
    options?: Options;
    conditions?: ConditionalFormat[];
    formats?: Format[];
    tableSizes?: {
      columns?: ColumnSize[],
      rows?: RowSize[]
    }
    localization?: Object | string;
  }

  export interface DataSourceParams {
    browseForFile?: boolean;
    catalog?: string;
    cube?: string;
    data?: Object[];
    dataSourceInfo?: string;
    dataSourceType?: string;
    fieldSeparator?: string;
    filename?: string;
    ignoreQuotedLineBreaks?: boolean;
    proxyUrl?: string;
    recordsetDelimiter?: string;
    binary?: boolean;
    roles?: string;
    localeIdentifier?: string;
    effectiveUserName?: string;
    customData?: string;
    hash?: string;
    username?: string;
    password?: string;
  }

  export interface Slice {
    columns?: Hierarchy[];
    measures?: Measure[];
    reportFilters?: Hierarchy[];
    rows?: Hierarchy[];
    drills?: {
      drillAll?: boolean,
      columns?: Object[],
      rows?: Object[],
    };
    expands?: {
      expandAll?: boolean,
      columns?: Object[],
      rows?: Object[]
    };
    sorting?: {
      column?: Object,
      row?: Object
    };
  }

  export interface Options {
    chart?: {
      activeMeasure?: string,
      activeTupleIndex?: number,
      autoRange?: boolean,
      labelsHierarchy?: string,
      multipleMeasures?: boolean,
      oneLevel?: boolean,
      showFilter?: boolean,
      showLegendButton?: boolean,
      showMeasures?: boolean,
      showWarning?: boolean,
      title?: string,
      type?: string
    };
    grid?: {
      showFilter?: boolean,
      showGrandTotals?: string,
      showHeaders?: boolean,
      showHierarchies?: boolean,
      showHierarchyCaptions?: boolean,
      showReportFiltersArea?: boolean,
      showTotals?: boolean,
      title?: string,
      type?: string
    };
    configuratorActive?: boolean;
    configuratorButton?: boolean;
    datePattern?: string;
    dateTimePattern?: string;
    defaultHierarchySortName?: string;
    drillThrough?: boolean;
    editing?: boolean;
    selectEmptyCells?: boolean;
    showAggregations?: boolean;
    showCalculatedValuesButton?: boolean;
    showDefaultSlice?: boolean;
    showMemberProperties?: boolean;
    sorting?: string;
    viewType?: string;
    showAggregationLabels?: boolean;
    useOlapFormatting?: boolean;
  }

  export interface PrintOptions {
    header?: string;
    footer?: string;
  }

  export interface Member {
    caption?: string;
    uniqueName?: string;
    hierarchyName?: string;
    children?: Member[];
    isLeaf?: boolean;
    parentMember?: string;
  }

  export interface FilterProperties {
    type?: string;
    members?: FilterItem[];
    quantity?: number;
    measure?: string;
  }

  export interface FilterItem {
    caption?: string;
    uniqueName?: string;
    hierarchyName?: string;
  }

  export interface Cell {
    columnIndex?: number;
    columns?: any[];
    height?: number;
    hierarchy?: Hierarchy;
    isClassicTotalRow?: boolean;
    isDrillThrough?: boolean;
    isGrandTotal?: boolean;
    isGrandTotalColumn?: boolean;
    isGrandTotalRow?: boolean;
    isTotal?: boolean;
    isTotalColumn?: boolean;
    isTotalRow?: boolean;
    member?: Member;
    width?: number;
    x?: number;
    y?: number;
    label?: string;
    measure?: string;
    rowIndex?: number;
    rows?: any[];
    type?: string;
    value?: number;
  }

  export interface ExportOptions {
    filename?: string;
    destinationType?: string;
    excelSheetName?: string;
    footer?: string;
    header?: string;
    pageOrientation?: string;
    showFilters?: boolean;
    url?: string;
    useOlapFormattingInExcel?: boolean;
  }

  export interface Hierarchy {
    caption?: string;
    dimensionName?: string;
    filter?: {
      members?: string[],
      negation?: boolean,
      measure?: string,
      quantity?: number,
      type?: string
    };
    sortName?: string;
    uniqueName?: string;
  }

  export interface Measure {
    uniqueName?: string;
    active?: boolean;
    aggregation?: string;
    availableAggregations?: string[];
    caption?: string;
    formula?: string;
    format?: string;
    grandTotalCaption?: string;
  }

  export interface ConditionalFormat {
    formula?: string;
    format?: Style;
    formatCSS?: string;
    row?: number;
    column?: number;
    measure?: string;
    hierarchy?: string;
    member?: string;
    isTotal?: number;
  }

  export interface Style {
    color?: string;
    backgroundColor?: string;
    backgroundImage?: string;
    borderColor?: string;
    fontSize?: string;
    fontWeight?: string;
    fill?: string;
    textAlign?: string;
    fontFamily?: string;
    width?: number;
    maxWidth?: number;
    height?: number;
    maxHeight?: number;
  }

  export interface Format {
    name?: string;
    thousandsSeparator?: string;
    decimalSeparator?: string;
    decimalPlaces?: number;
    maxDecimalPlaces?: number;
    maxSymbols?: number;
    currencySymbol?: string;
    currencySymbolAlign?: string;
    nullValue?: string;
    infinityValue?: string;
    divideByZeroValue?: string;
    textAlign?: string;
  }

  export interface ColumnSize {
    width?: number;
    idx?: number;
    tuple?: string[];
    measure?: string;
  }

  export interface RowSize {
    height?: number;
    idx?: number;
    tuple?: string[];
    measure?: string;
  }

  export interface CellBuilder {
    attr?: Object;
    classes?: string[];
    style?: Object;
    tag?: string;
    text?: string;
    addClass(value?: string): void;
    toHtml(): string;
  }
}
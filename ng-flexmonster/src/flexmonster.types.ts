export module Flexmonster {
    export interface Params {
        // params
        toolbar?: boolean;
        licenseKey?: string;
        width?: string | number;
        height?: string | number;
        componentFolder?: string;
        report?: Flexmonster.Report | string;
        global?: Flexmonster.Report;
        customizeCell?: (cell: Flexmonster.CellBuilder, data: Flexmonster.CellData) => void;
        customizeContextMenu?: (items: Flexmonster.ContextMenuItem[], data: Flexmonster.CellData | Flexmonster.ChartData, viewType: string) => Flexmonster.ContextMenuItem[];
        // events
        cellclick?: Function;
        celldoubleclick?: Function;
        dataerror?: Function;
        datafilecancelled?: Function;
        dataloaded?: Function;
        datachanged?: Function;
        fieldslistclose?: Function;
        fieldslistopen?: Function;
        filterclose?: Function;
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
        beforegriddraw?: Function;
        aftergriddraw?: Function;
        afterchartdraw?: Function;
        // other
        container?: Element | string;
    }

    export interface Pivot {
        addCalculatedMeasure(measure: Flexmonster.Measure): void;
        addCondition(condition: Flexmonster.ConditionalFormat): void;
        addJSON(json: Object[]): void;
        alert(options: { title?: string; message?: string; type?: string; buttons?: { label: string; handler?: Function; }[]; blocking?: boolean; }): void;
        clear(): void;
        clearFilter(hierarchyName: string): void;
        clearXMLACache(proxyUrl: string, databaseId: string, callbackHandler: Function | string, cubeId: string, measuresGroupId: string, username?: string, password?: string): void;
        closeFieldsList(): void;
        collapseAllData(): void;
        collapseData(hierarchyName: string): void;
        connectTo(object: Flexmonster.DataSource, callbackHandler: Function | string): void;
        customizeCell(customizeCellFunction: (cell: Flexmonster.CellBuilder, data: Flexmonster.CellData) => void): void;
        customizeContextMenu(customizeFunction: (items: Flexmonster.ContextMenuItem[], data: Flexmonster.CellData | Flexmonster.ChartData, viewType: string) => Flexmonster.ContextMenuItem[]): void;
        dispose(): void;
        expandAllData(withAllChildren?: boolean): void;
        expandData(hierarchyName: string): void;
        exportTo(type: string, exportOptions?: Flexmonster.ExportOptions, callbackHandler?: Function | string): void;
        getAllConditions(): Flexmonster.ConditionalFormat[];
        getAllHierarchies(): Flexmonster.Hierarchy[];
        getAllMeasures(): Flexmonster.Measure[];
        getCell(rowIdx: number, colIdx: number): Flexmonster.CellData;
        getColumns(): Flexmonster.Hierarchy[];
        getCondition(id: string): Flexmonster.ConditionalFormat;
        getData(options: { slice?: Flexmonster.Slice }, callbackHandler: Function | string, updateHandler?: Function | string): void;
        getFilter(hierarchyName: string): Flexmonster.FilterItem[];
        getFilterProperties(hierarchyName: string): Flexmonster.FilterProperties;
        getFormat(measureName: string): Flexmonster.Format;
        getMeasures(): Flexmonster.Measure[];
        getMembers(hierarchyName: string, memberName: string, callbackHandler: Function | string): Flexmonster.Member[];
        getOptions(): Flexmonster.Options;
        getReportFilters(): Flexmonster.Hierarchy[];
        getReport(format?: string): Flexmonster.Report | string;
        getRows(): Flexmonster.Hierarchy[];
        getSelectedCell(): Flexmonster.CellData | Flexmonster.CellData[];
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
        openFilter(hierarchyName: string): void;
        print(options?: Flexmonster.PrintOptions): void;
        refresh(): void;
        removeAllCalculatedMeasures(): void;
        removeAllConditions(): void;
        removeCalculatedMeasure(uniqueName: string): void;
        removeCondition(id: string): void;
        removeSelection(): void;
        runQuery(slice: Flexmonster.Slice): void;
        save(filename: string, destination: string, callbackHandler?: Function | string, url?: string, embedData?: boolean): string;
        setBottomX(hierarchyName: string, num: number, measure: Flexmonster.MeasureObject): void;
        setFilter(hierarchyName: string, items: string[], negation?: boolean): void;
        setFormat(format: Flexmonster.Format, measureName: string): void;
        setOptions(options: Flexmonster.Options): void;
        setReport(report: Flexmonster.Report): void;
        setSort(hierarchyName: string, sortName: string, customSorting?: string[]): void;
        setTopX(hierarchyName: string, num: number, measure: Flexmonster.MeasureObject): void;
        showCharts(type?: string, multiple?: boolean): void;
        showGrid(): void;
        showGridAndCharts(type?: string, position?: string, multiple?: boolean): void;
        sortingMethod(hierarchyName: string, compareFunction: Function): void;
        sortValues(axisName: string, type: string, tuple: number[], measure: Flexmonster.MeasureObject): void;
        updateData(object: Flexmonster.DataSource | Object[]): void;
        version: number;
        fusioncharts?: {
            getData(options: { type: string; slice?: Flexmonster.Slice; prepareDataFunction?: Function }, callbackHandler: Function, updateHandler?: Function): void;
            getNumberFormat(format: Object): Object;
        };
        googlecharts?: {
            getData(options: { type?: string; slice?: Flexmonster.Slice; prepareDataFunction?: Function }, callbackHandler: Function, updateHandler?: Function): void;
            getNumberFormat(format: Object): Object;
            getNumberFormatPattern(format: Object): string;
        };
        highcharts?: {
            getData(options: { type?: string; slice?: Flexmonster.Slice; xAxisType?: string; valuesOnly?: boolean, withDrilldown?: boolean, prepareDataFunction?: Function }, callbackHandler: Function, updateHandler?: Function): void;
            getAxisFormat(format: Object): string;
            getPointXFormat(format: Object): string;
            getPointYFormat(format: Object): string;
            getPointZFormat(format: Object): string;
        };
    }

    export interface Report {
        dataSource?: Flexmonster.DataSource;
        slice?: Flexmonster.Slice;
        options?: Flexmonster.Options;
        conditions?: Flexmonster.ConditionalFormat[];
        formats?: Flexmonster.Format[];
        tableSizes?: {
            columns?: Flexmonster.ColumnSize[];
            rows?: Flexmonster.RowSize[];
        };
        localization?: Object | string;
    }

    export interface DataSource {
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
        columns?: Flexmonster.Hierarchy[];
        measures?: Flexmonster.Measure[];
        reportFilters?: Flexmonster.Hierarchy[];
        rows?: Flexmonster.Hierarchy[];
        drills?: {
            drillAll?: boolean;
            columns?: { tuple: string[]; measure?: Flexmonster.MeasureObject; }[];
            rows?: { tuple: string[]; measure?: Flexmonster.MeasureObject; }[];
        };
        expands?: {
            expandAll?: boolean;
            columns?: { tuple: string[]; measure?: Flexmonster.MeasureObject; }[];
            rows?: { tuple: string[]; measure?: Flexmonster.MeasureObject; }[];
        };
        sorting?: {
            column?: { type: string; tuple: string[]; measure: Flexmonster.MeasureObject; };
            row?: { type: string; tuple: string[]; measure: Flexmonster.MeasureObject; };
        };
        drillThrough?: string[];
    }

    export interface Options {
        chart?: {
            activeMeasure?: Flexmonster.MeasureObject;
            activeTupleIndex?: number;
            autoRange?: boolean;
            labelsHierarchy?: string;
            multipleMeasures?: boolean;
            oneLevel?: boolean;
            showFilter?: boolean;
            showLegendButton?: boolean;
            showMeasures?: boolean;
            showWarning?: boolean;
            title?: string;
            type?: string;
            showDataLabels?: boolean;
        };
        grid?: {
            showFilter?: boolean;
            showGrandTotals?: string;
            showHeaders?: boolean;
            showHierarchies?: boolean;
            showHierarchyCaptions?: boolean;
            showReportFiltersArea?: boolean;
            showTotals?: boolean;
            title?: string;
            type?: string;
            showAutoCalculationBar?: boolean;
            dragging?: boolean;
            grandTotalsPosition: string;
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
        defaultDateType?: string;
        timePattern?: string;
    }

    export interface PrintOptions {
        header?: string;
        footer?: string;
    }

    export interface Member {
        caption?: string;
        uniqueName?: string;
        hierarchyName?: string;
        children?: Flexmonster.Member[];
        isLeaf?: boolean;
        parentMember?: string;
    }

    export interface FilterProperties {
        type: string;
        members?: Flexmonster.FilterItem[];
        quantity?: number;
        measure?: Flexmonster.MeasureObject;
    }

    export interface FilterItem {
        caption?: string;
        uniqueName?: string;
        hierarchyName?: string;
    }

    export interface CellData {
        columnIndex?: number;
        columns?: Object[];
        escapedLabel?: string;
        height?: number;
        hierarchy?: Flexmonster.Hierarchy;
        isClassicTotalRow?: boolean;
        isDrillThrough?: boolean;
        isGrandTotal?: boolean;
        isGrandTotalColumn?: boolean;
        isGrandTotalRow?: boolean;
        isTotal?: boolean;
        isTotalColumn?: boolean;
        isTotalRow?: boolean;
        member?: Flexmonster.Member;
        width?: number;
        x?: number;
        y?: number;
        label?: string;
        measure?: Flexmonster.MeasureObject;
        rowIndex?: number;
        rows?: Object[];
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
            members?: string[];
            negation?: boolean;
            measure?: Flexmonster.MeasureObject;
            quantity?: number;
            type?: string;
        };
        sortName?: string;
        sortOrder?: string[];
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

    export interface MeasureObject {
        uniqueName: string;
        aggregation?: string;
    }

    export interface ConditionalFormat {
        formula?: string;
        format?: Flexmonster.Style;
        formatCSS?: string;
        row?: number;
        column?: number;
        measureName?: string;
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
        measure?: Flexmonster.MeasureObject;
    }

    export interface RowSize {
        height?: number;
        idx?: number;
        tuple?: string[];
        measure?: Flexmonster.MeasureObject;
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

    export interface ContextMenuItem {
        label?: string;
        handler?: Function | string;
        submenu?: Flexmonster.ContextMenuItem[];
        isSelected?: boolean;
    }

    export interface ChartData {
        columnTuple?: number[];
        id?: string;
        label?: string;
        measure?: Flexmonster.MeasureObject;
        rawTuple?: number[];
        value?: number;
    }
}
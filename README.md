## Introduction

    `susu-utils` is a quick ToolKit.

## ToolKit Body

    Timer(A collection of shortcuts for time classes)

        Timer.zero(number)
            If the input parameter is less than 10, it will be converted to two digits.
            parameter
                number ------ Must be a number
        Timer.weekName(day)
            Gets the name of today's in week
            parameter
                day ----- <=6 && >=0


        timeFormat([date, format])
            parameter
                date ------ The time you need to convert formats.
                format ------ The format you need.
            support formart
                yyyy ------ fullYear
                MM ------ month
                dd ------ date
                hh ------ hours
                mm ------ minute
                ss ------ second
                ww ------ day
        getMonth([format, month, year])
            Gets the date of the first and last day of the specified month.
            parameter
                format ------ Same support format as above
                month ------ 0~11
                year ------ all
        getYear([format, year])
            Gets the date of the first and last day of the specified year.
            parameter
                format ------ Same support format as above
                year ------ all
        getCurrentWeek([format])
            Gets the date of the first and last day of the current week.
            parameter
                format ------ Same support format as above
        getPreviousWeek([format])
            Gets the date of the first and last day of the provious week.
            parameter
                format ------ Same support format as above
        getNextWeek([format])
            Gets the date of the first and last day of the next week.
            parameter
                format ------ Same support format as 
        getDayBeforeWeek([format])
            Gets the date of the first and last day of the week before the day.
            parameter
                format ------ Same support format as above
        getDayAfterWeek([format])
            Gets the date of the first and last day of the week after the day.
            parameter
                format ------ Same support format as above
        getCurrentQuarter([format])
            Gets the date of the first and last day of the current quarter.
            parameter
                format ------ Same support format as above
        getPreviousQuarter([format])
            Gets the date of the first and last day of the previous quarter.
            parameter
                format ------ Same support format as above
        getNextQuarter([format])
            Gets the date of the first and last day of the next quarter.
            parameter
                format ------ Same support format as above
    
    

    
    Parameter(Processing of parameters)

        Parameter.formatGetSearch(str)
            Converting search parameters in get requests to objects
            parameter
                str ------ required,must be a string
            support format
                "?key1=value1&key2=value2..."
        Parameter.humpToUnderline
            Convert hump-like words into underlined conjunctions
            parameter
                str ------ required,must be a string
        Parameter.underlineToHump
            Convert underlined words to hump
            parameter
                str ------ required,must be a string



    Currency(Formatting Currency and Unformatting Currency)
        
        Currency.formatCurrency(money)
            Formatting Currency
            Keep the last two decimal points
            The preservation method is interception
            parameter
                money ------ string or number
        Currency.unformatCurrency(money)
            Unformatting Currency
            parameter
                money ------ string or number


    Determine(Determine what type of value is it)

        Determine.isArray(val)
            Determine if a value is an Array
            parameter
                val ------ all
        Determine.isArrayBuffer(val)
            Determine if a value is an ArrayBuffer
            parameter
                val ------ all
        Determine.isFormData(val)
            Determine if a value is an FormData
            parameter
                val ------ all
        Determine.isString(val)
            Determine if a value is an String
            parameter
                val ------ all
        Determine.isNumber(val)
            Determine if a value is an Number
            parameter
                val ------ all
        Determine.isUndefined(val)
            Determine if a value is an Undefined
            parameter
                val ------ all
        Determine.isObject(val)
            Determine if a value is an Object
            parameter
                val ------ all
        Determine.isDate(val)
            Determine if a value is an Date
            parameter
                val ------ all
        Determine.isFile(val)
            Determine if a value is an File
            parameter
                val ------ all
        Determine.isBlob(val)
            Determine if a value is an Blob
            parameter
                val ------ all
        Determine.isFunction(val)
            Determine if a value is an Function
            parameter
                val ------ all

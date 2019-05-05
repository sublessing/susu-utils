Introduction

    susu-utils is a quick ToolKit.

ToolKit Body

    Timer(A collection of shortcuts for time classes)

        timeFormat([date, format])
            parameter
                date ------ The time you need to convert formats.
                format ------ The format you need.
            support formart:
                yyyy ------ fullYear
                MM ------ month
                dd ------ date
                hh ------ hours
                mm ------ minute
                ss ------ second
                ww ------ day
        getDayOfMonth([day, month])
            Gets the date of the first and last day of the specified month.
            parameter
                day ------ 1 or -1
                month ------ 0~11
        zero(number)
            If the input parameter is less than 10, it will be converted to two digits.
            parameter
                number ------ Must be a number
        weekName(day)
            Get the name of today's in week
            parameter
                day ----- <=6 && >=0
        
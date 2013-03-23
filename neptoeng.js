

	
	// initialization of variable
	var nepMap = new Object();
	var eng_start_date;
	var eng_start_month;
	var eng_start_year;
	var start_year;
	var start_month;
	var nep_start_date;
	var nep_start_month;
	var nep_start_year;
      var day_of_week;

	// constructor to load initial values to start dates
	function loadStartDates() {
		this.eng_start_year = 1943;
		this.eng_start_month = 4;
		this.eng_start_date = 14;

		this.nep_start_year = 2000;
		this.nep_start_month = 1;
		this.nep_start_date = 1;

            this.day_of_week = 4;
	}

	function loadMap() {
            this.nepMap = new Array();
		// load nepali month array
		this.nepMap[2000] = new Array( 0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 );
            this.nepMap[2001] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2002] = new Array( 0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2003] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2004] = new Array( 0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 );
            this.nepMap[2005] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2006] = new Array( 0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2007] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2008] = new Array( 0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 );
            this.nepMap[2009] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2010] = new Array( 0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2011] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2012] = new Array( 0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 );
            this.nepMap[2013] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2014] = new Array( 0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2015] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2016] = new Array( 0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 );
            this.nepMap[2017] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2018] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2019] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 );
            this.nepMap[2020] = new Array( 0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2021] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2022] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 );
            this.nepMap[2023] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 );
            this.nepMap[2024] = new Array( 0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2025] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2026] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2027] = new Array( 0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 );
            this.nepMap[2028] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2029] = new Array( 0, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2030] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2031] = new Array( 0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 );
            this.nepMap[2032] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2033] = new Array( 0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2034] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2035] = new Array( 0, 30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 );
            this.nepMap[2036] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2037] = new Array( 0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2038] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2039] = new Array( 0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 );
            this.nepMap[2040] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2041] = new Array( 0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2042] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2043] = new Array( 0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 );
            this.nepMap[2044] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2045] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2046] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2047] = new Array( 0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2048] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2049] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 );
            this.nepMap[2050] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 );
            this.nepMap[2051] = new Array( 0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2052] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2053] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 );
            this.nepMap[2054] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 );
            this.nepMap[2055] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2056] = new Array( 0, 31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2057] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2058] = new Array( 0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 );
            this.nepMap[2059] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2060] = new Array( 0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2061] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2062] = new Array( 0, 30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31 );
            this.nepMap[2063] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2064] = new Array( 0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2065] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2066] = new Array( 0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31 );
            this.nepMap[2067] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2068] = new Array( 0, 31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2069] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2070] = new Array( 0, 31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30 );
            this.nepMap[2071] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2072] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2073] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31 );
            this.nepMap[2074] = new Array( 0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2075] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2076] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 );
            this.nepMap[2077] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31 );
            this.nepMap[2078] = new Array( 0, 31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2079] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30 );
            this.nepMap[2080] = new Array( 0, 31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30 );
            this.nepMap[2081] = new Array( 0, 31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30 );
            this.nepMap[2082] = new Array( 0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 );
            this.nepMap[2083] = new Array( 0, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 );
            this.nepMap[2084] = new Array( 0, 31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30 );
            this.nepMap[2085] = new Array( 0, 31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30 );
            this.nepMap[2086] = new Array( 0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 );
            this.nepMap[2087] = new Array( 0, 31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30 );
            this.nepMap[2088] = new Array( 0, 30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30 );
            this.nepMap[2089] = new Array( 0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 );
            this.nepMap[2090] = new Array( 0, 30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30 );
	
		// load english months with leap year
		this.nepMap[0000] = new Array( 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 );
		this.nepMap[0001] = new Array( 0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 );
	}

       function DateConversion ( date, month, year )
      {

            loadMap();
            loadStartDates();
            this.start_month = month;
            this.start_year = year;
            var new_days = 0;

            // count total days in a year
            for ( var i = this.nep_start_year; i < year; i++ ) 
            {
                  for ( var j = 1; j <= 12; j++ )
                  {
                        new_days += this.nepMap[i][j];
                  }
            }

            // count total days in that
            // console.log(this.eng_start_year);
            // console.log(this.nepMap[2000][1]); 
            
            for ( var j = this.nep_start_month; j < month; j++ )
            {
                  new_days += this.nepMap[year][j];
            }

            // count total days user date
            new_days += ( date - this.nep_start_date );

            var end_day_of_month;         // total days of each month

            while ( new_days != 0 ) 
            {
                  if( isLeapYear(this.eng_start_year))
                  {
                        end_day_of_month = nepMap[0001][eng_start_month];
                  }
                  else
                  {
                        end_day_of_month = nepMap[0000][eng_start_month];
                  }

                  this.day_of_week++;
                  this.eng_start_date++;

                  if ( this.eng_start_date > end_day_of_month ) 
                  {
                        this.eng_start_month++;

                        this.eng_start_date = 1;

                        if ( this.eng_start_month > 12 )
                        {
                              this.eng_start_year++;
                              this.eng_start_month = 1;
                        }
                  }

                  if ( this.day_of_week > 7 )
                  {
                        this.day_of_week = 1;
                  }
                  new_days--; // after each loop, reduce day
            }
            console.log(new_days);
            var result = this.eng_start_year + "/" + this.eng_start_month + "/" + this.eng_start_date;

            return result;
      }

      function isLeapYear( year ) 
      {
            if ( year % 100 == 0 ) 
            {
                  return year % 400 == 0;
            }
            else 
            {
                  return year % 4 == 0;
            }
      }

      function getYear() 
      {
            return this.eng_start_year;
      }

      function getMonth() 
      {
            return this.eng_start_month;
      }

      function getDate() 
      {
            return this.eng_start_date;
      }


      function getDay()
      {
            return this.day_of_week;
      }




	
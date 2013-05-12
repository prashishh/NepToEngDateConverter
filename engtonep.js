
	
// initialization of variable
var nepMap = new Object();
var eng_start_date;
var eng_start_month;
var eng_start_year;
var start_year;
var start_month;
var start_date;
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
  this.start_month = nep_start_month;
  this.start_year = nep_start_year;
  this.start_date = nep_start_date;
  var new_days = 0;

  // count total days in a year
  // source: http://stackoverflow.com/questions/2627473/how-to-calculate-the-number-of-days-between-two-dates-using-javascript
  var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(year, month, date);
  var secondDate = new Date(eng_start_year, eng_start_month, eng_start_date);

  new_days = Math.round((firstDate.getTime() - secondDate.getTime())/(oneDay));
  console.log(new_days);
  var end_day_of_month;         // total days of each month

  while ( new_days != 0 ) 
  {

	end_day_of_month = nepMap[this.start_year][this.start_month];

	this.day_of_week++;
	this.start_date++;

	if ( this.start_date > end_day_of_month ) 
	{
	  this.start_month++;

	  this.start_date = 1;

	  if ( this.start_month > 12 )
	  {
			this.start_year++;
			this.start_month = 1;
	  }
	}

	if ( this.day_of_week > 7 )
	{
		  this.day_of_week = 1;
	}
	new_days--; // after each loop, reduce day
  }
  
  var result = this.start_year + "/" + this.start_month + "/" + this.start_date;

  return result;
	
}

function getYear() 
{
  return this.start_year;
}

function getMonth() 
{
  return this.start_month;
}

function getDate() 
{
  return this.start_date;
}


function getDay()
{
	return this.day_of_week;
}




	

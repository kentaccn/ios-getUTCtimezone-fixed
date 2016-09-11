/*!
 * Kenta@DiForstor X
 * Code licensed under the MIT License.
 * For details, see http://kenta.diforstorx.org
 */

function monthofYear(mon) {
    switch (mon) {
        case 0:
            s = 1;
            break;
        case 1:
            s = 2;
            break;
        case 2:
            s = 3;
            break;
        case 3:
            s = 4;
            break;
        case 4:
            s = 5;
            break;
        case 5:
            s = 6;
            break;
        case 6:
            s = 7;
            break;
        case 7:
            s = 8;
            break;
        case 8:
            s = 9;
            break;
        case 9:
            s = 10;
            break;
        case 10:
            s = 11;
            break;
        case 11:
            s = 12;
            break;
        default:
            s = "Unknownmonth"
    }
    return s;
}

function check_extend_month(mon) {
    switch (mon) {
        case 0:
            s = true;
            break;
        case 1:
            s = false;
            break;
        case 2:
            s = true;
            break;
        case 3:
            s = false;
            break;
        case 4:
            s = true;
            break;
        case 5:
            s = false;
            break;
        case 6:
            s = true;
            break;
        case 7:
            s = true;
            break;
        case 8:
            s = false;
            break;
        case 9:
            s = true;
            break;
        case 10:
            s = false;
            break;
        case 11:
            s = true;
            break;
        default:
            s = "N/A";
    }
    return s;
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//Date section
var d = new Date();
var dte = d.getUTCDate();
var mon = monthofYear(d.getUTCMonth());
var yr = d.getUTCFullYear();

console.log("====== Raw Date ========");
console.log("date: " + dte);
console.log("month: " + mon);

//Time section
var hr = d.getUTCHours();
var min = d.getUTCMinutes();
var sec = d.getUTCSeconds();

console.log("hr: " + hr);

//set to computer fornat;
var extend_month = check_extend_month(mon - 1);
var lunar_year = false;
var timezone = (0 - d.getTimezoneOffset()) / 60;
console.log("timezone: " + timezone);

if (yr % 400 == 0 || (yr % 100 != 0 && yr % 4 == 0)) {
    lunar_year = true;
}
console.log("lunar_year: " + lunar_year);
console.log("extend_month: " + extend_month);

//delay for one min for data input delay, only active if not zero minutes
if (min >= 1) {
    min = min - 1;
}

hr = hr + timezone;

console.log("hr+timezone: " + hr);

if (hr >= 24) {
    if (hr == 24) {
        hr = 0;
    } else {
        hr = hr - 24;
    };
    dte = dte + 1;
    if (dte >= 29) {
        if ((dte == 29) && (mon == 2) && (lunar_year == false)) {
            mon = mon + 1;
            dte = 1;
        };
        if ((dte == 30) && (mon == 2) && (lunar_year == true)) {
            mon = mon + 1;
            dte = 1;
        };
        if ((dte > 30) && (extend_month == false)) {
            mon = mon + 1;
            dte = 1;
        };
        if ((dte > 31) && (extend_month == true)) {
            mon = mon + 1;
            dte = 1;
        }

        if (mon > 11) {
            mon = 0;
            yr = yr + 1;
        }
    };
    console.log("====== Modefied Data ========");
    console.log("date: " + dte);
    console.log("month: " + mon);
    console.log("hr: " + hr);
};

//add zero formatting
mon = addZero(mon);
dte = addZero(dte);
min = addZero(min);
sec = addZero(sec);

//Date and time formatting
var date = dte + "/" + mon + "/" + yr;
var create_time = hr + ':' + min /*+ ':' + sec*/ ;

console.log("date: " + date);
console.log("create_time: " + create_time);

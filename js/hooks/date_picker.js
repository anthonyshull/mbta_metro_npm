import flatpickr from "flatpickr"
import { addMinutes, format, getMinutes } from "date-fns"

const SERVER_DATE_FORMAT = "Y-m-d G:i K"

const config = {
  allowInvalidPreload: true, // needed on mobile to prevent the input from becoming blank when selecting a date outside the min/max
  altInput: true, // allow different format to be sent to server
  dateFormat: SERVER_DATE_FORMAT, // this gets sent to the server
  defaultDate: new Date(),
  enableTime: true,
  // maxDate,
  // minDate,
  formatDate: (date, formatString, locale) => {
    if (formatString === SERVER_DATE_FORMAT) {
      // Formats a date into a string in the format util.ex parse/1 expects.
      return format(date, "yyyy-MM-dd HH:mm aa");
    }

    // if not being sent to the server, use localized format
    return i18nDate(date, locale);
  },
  wrap: true // works with adjacent icon
}

/**
 * Formats a date into a string in the user's locale.
 */
const i18nDate = (date, locale = navigator.language) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: "long",
    weekday: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  });

  return formatter.format(date);
}

/**
 * Set the date and time to the current time.
 */
function setDateTimeNow(flatpickrInstance) {
  flatpickrInstance.setDate(new Date());
}

/**
 * Set the date and time to the nearest 5 minutes.
 */
function setDateTimeFiveMinutes(flatpickrInstance) {
  const now = new Date();
  const minutes = getMinutes(now);
  const roundedMinutes = Math.ceil(minutes / 5) * 5;
  const newDate = addMinutes(now, roundedMinutes - minutes);
  
  flatpickrInstance.setDate(newDate);
}

/**
 * This is a LiveView hook that initializes a flatpickr date picker.
 */
export default {
  mounted() {
    el = this.el.querySelector("#date-picker-calendar");

    this.pickr = flatpickr(el, config);
  },
  destroyed() {
    this.pickr.destroy();
  }
}


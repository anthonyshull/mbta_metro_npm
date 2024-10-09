import flatpickr from "flatpickr"
import { addMinutes, formatISO, getMinutes } from "date-fns"

const SERVER_DATE_FORMAT = "Z"

const config = {
  allowInvalidPreload: true, // needed on mobile to prevent the input from becoming blank when selecting a date outside the min/max
  altInput: true, // allow different format to be sent to server
  dateFormat: SERVER_DATE_FORMAT, // this gets sent to the server
  enableTime: true,
  // maxDate,
  // minDate,
  formatDate: (date, formatString, locale) => {
    if (formatString === SERVER_DATE_FORMAT) {
      // Formats a date into a string in the format util.ex parse/1 expects.
      return formatISO(date);
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
 * This is a LiveView hook that initializes a flatpickr date picker.
 */
export default {
  mounted() {
    const el = this.el.querySelector("#date-picker-calendar");
    const customConfig = this.el.dataset.config ? JSON.parse(this.el.dataset.config) : {};

    console.log("CUSTOM CONFIG", customConfig);

    this.pickr = flatpickr(el, config);

    this.handleEvent("set-datetime", ({datetime}) => {
      this.pickr.setDate(datetime);
    });
  },
  destroyed() {
    this.pickr.destroy();
  }
}


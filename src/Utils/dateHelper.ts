import { DayType, MonthType } from 'shamsi'
import { gregorianToJalali, jalaliToGregorian } from 'shamsi-date-converter'

export enum DateKeysEnum {
  'MIN' = 'min_date',
  'MAX' = 'max_date',
  'START' = 'start_date',
  'END' = 'end_date',
  'DEFAULT' = 'default_date',
  'TODAY' = 'TODAY',
}

export type keyValueType = {
  [key: string]: any
}

export interface IConfig {
  value: any
  label: any
}

export const defaultConfig = [
  {
    value: 'min_date',
    label: ['TODAY', -30, 'y'],
  },
  {
    value: 'max_date',
    label: ['TODAY', 5, 'y'],
  },
  {
    value: 'start_date',
    label: ['TODAY', -30, 'y'],
  },
  {
    value: 'end_date',
    label: ['TODAY', 5, 'y'],
  },
  {
    value: 'default_date',
    label: ['TODAY', 0, 'y'],
  },
]

const isLeap = (year) => new Date(year + 621, 1, 29).getDate() === 29

export const toStandardDate = (jalali: string): Date => {
  const [y, m, d]: number[] = jalali.split('/').map((el) => Number(el))
  return new Date(jalaliToGregorian(y, m as MonthType, d as DayType).join('/'))
}

export const monthName: string[] = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
]

export const weekDaysName: string[] = [
  'شنبه',
  'یک‌شنبه',
  'دو‌شنبه',
  'سه‌شنبه',
  'چهارشنبه',
  'پنج‌شنبه',
  'جمعه',
]

export const getMonthName = (month): string => monthName[month - 1]

export const dayInMonth = (year: number, month: MonthType): number =>
  month <= 6 ? 31 : month < 12 || isLeap(year) ? 30 : 29

export const isAfterDate = (mainDate: string, expectAfter: string): boolean =>
  toStandardDate(expectAfter).getTime() - toStandardDate(mainDate).getTime() > 0

export const monthStartDay = (year: number, month: MonthType): number =>
  (toStandardDate(`${year}/${month}/${1}`).getDay() + 1) % 7

export const today = () => gregorianToJalali(new Date()).join('/')

export const addDate = (
  date: string,
  add: number,
  key: 'd' | 'm' | 'y'
): string => {
  const jsDate = new Date(toStandardDate(date))

  switch (key.toLowerCase()) {
    case 'd':
      return gregorianToJalali(
        new Date(jsDate.setDate(jsDate.getDate() + add))
      ).join('/')
    case 'm':
      return gregorianToJalali(
        new Date(jsDate.setMonth(jsDate.getMonth() + add))
      ).join('/')
    case 'y':
      const [year, month, day] = date.split('/')
      return `${Number(year) + add}/${month}/${day}`
    default:
      return date
  }
}

export const minDate = (dateArray: string[]): string => {
  return dateArray.reduce((a, b) => (isAfterDate(a, b) ? a : b))
}

export const maxDate = (dateArray: string[]): string => {
  return dateArray.reduce((a, b) => (isAfterDate(a, b) ? b : a))
}

export const clampDate = (min: string, date: string, max: string): string => {
  return maxDate([minDate([date, max]), min])
}

export const findDate = (
  config: IConfig[],
  dateCode: DateKeysEnum,
  baseDateContainer: keyValueType = {}
): string => {
  const [baseDateCode, addDateCode, addPriodCode] = config.find(
    (el) => el.value === dateCode
  ).label
  const baseDate: string =
    baseDateCode === DateKeysEnum.TODAY || !baseDateContainer[baseDateCode]
      ? today()
      : baseDateContainer[baseDateCode]

  return addDate(
    baseDate,
    addDateCode as number,
    addPriodCode as 'y' | 'm' | 'd'
  )
}

export const addOneMonth = (month: string, year: string) => {
  const m = Number(month)
  const y = Number(year)

  if (m < 12 && m > 0) {
    return { m: m + 1, y: y }
  } else if (m === 12) {
    return { m: 1, y: y + 1 }
  }
}

export const minusOneMonth = (month: string, year: string) => {
  const m = Number(month)
  const y = Number(year)

  if (m > 1) {
    return { m: m - 1, y: y }
  } else if (m === 1) {
    return { m: 12, y: y - 1 }
  }
}

export default getMonthName

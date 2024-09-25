import { AccountFilter } from "./account-filter"
import { DateFilter } from "./date-filter"

export const Filters = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-y-2 sm:gap-y-0 sm:gap-x-2">
      <AccountFilter />
      <DateFilter />
    </div>
  )
}

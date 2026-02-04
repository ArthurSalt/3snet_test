import { memo, type ReactNode, useState } from "react"
import type { RenderTabProps, Tab } from "../../../types"

type TabsProps = {
  tabs: Tab[]
  sx?: string
  renderTab: (props: RenderTabProps) => ReactNode
}

export const Tabs = memo(({ tabs, sx, renderTab }: TabsProps) => {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id)

  return (
    <div className={`flex border-b border-[#A6B1B9] ${sx}`}>
      {tabs.map(tab => {
        const isActive = tab.id === activeTabId

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTabId(tab.id)}
            className="relative px-4 cursor-pointer"
          >
            {renderTab({ label: tab.label, isActive })}
          </button>
        )
      })}
    </div>
  )
})

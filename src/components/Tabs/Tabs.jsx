import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, setActiveTabId, onTabSelected, setOnTabSelected }) => {
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab, index) => (
          {activeTabId === index ?
            (<li
            className={index === activeTabId ? 'is-active' : ''}
            data-cy="Tab"
            onClick={() => setActiveTabId(index)}
            >
            <a href="#tab-id" data-cy="TabLink">
              {tab.title}
            </a>
            </li>) :
            (
              setOnTabSelected()
          )}
        ))}
      </ul>

      <div className="block" data-cy="TabContent">
        Some text 1
      </div>
    </div>
    ;
  </div>;
};

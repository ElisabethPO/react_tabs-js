import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames({ 'is-active': tab.id === activeTabId })}
            data-cy="Tab"
            onClick={() => onTabSelected(tab.id)}
          >
            <a href={`#${tab.id}`} data-cy="TabLink">
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === tab.activeTabId)?.content}
      </div>
    </div>
  </div>
);

import styles from "../List/List.module.scss";

type Props = {
  list: any[];
  removeItem: (item: any) => void;
};

const List: React.FC<Props> = ({ list, removeItem }) => {
  return (
    <div>
      {list.map((item, key) => (
        <div className={styles.listItem} key={key}>
          <a
            className={styles.removeIcon}
            onClick={(e) => removeItem(e)}
            data-index={key}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
          {item}
        </div>
      ))}
    </div>
  );
};
export default List;

import { styles } from "../styles/Grid";

interface Props {
  clearFilters: () => void;
}

function TitleSection({ clearFilters }: Props) {
  return (
    <div style={styles.titleSectionContainer}>
      <h1>Near Earth Objects</h1>
      <button style={styles.button} onClick={clearFilters}>
        Clear Filters and Sorters
      </button>
    </div>
  );
}

export default TitleSection;

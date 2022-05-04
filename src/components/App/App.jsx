import { useState } from "react";
import { Input, Spinner, Table } from "../../ui-kit";

import { useGetPosts, useSearchTableData } from "../../hooks";
import styles from "./App.module.scss";

const columns = [
  { accessor: "id", label: "ID" },
  { accessor: "title", label: "Заголовок" },
  { accessor: "body", label: "Описание" },
];

const App = () => {
  const { posts, isLoading } = useGetPosts();
  const [query, setQuery] = useState("");
  const searchablePosts = useSearchTableData(posts, query);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск"
          className={styles.input}
        />
        {isLoading && <Spinner />}
        {searchablePosts.length > 0 ? (
          <Table columns={columns} rows={searchablePosts} />
        ) : (
          <h1>Совпадений не найдено</h1>
        )}
      </div>
    </div>
  );
};

export default App;

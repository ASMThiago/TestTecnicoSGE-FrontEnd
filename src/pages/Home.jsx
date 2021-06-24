import React, { useEffect, useState } from 'react';
import LayoutDefault from '../layouts/LayoutDefault';
import CatTag from '../components/CatTag';
import catServices from '../services/cat';

export default function Home() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data = [] } = await catServices.getTags();
      setTags(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <LayoutDefault tabActive={0}>
        {tags.map((tag) => (
          <CatTag tag={tag} />
        ))}
      </LayoutDefault>
    </div>
  );
}

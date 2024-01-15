import EditableImage from '@/components/layout/EditableImage';
import MenuItemPriceProps from '@/components/layout/MenuItemPriceProps';

import { useEffect, useState } from 'react';

export default function MenuItemForm({ onSubmit, menuItem }) {
  const [image, setImage] = useState(menuItem?.image || '');
  const [name, setName] = useState(menuItem?.name || '');
  const [description, setDescription] = useState(menuItem?.description || '');
  const [basePrice, setBasePrice] = useState(menuItem?.basePrice || '');
  const [sizes, setSizes] = useState(menuItem?.sizes || []);
  const [extraIngredientPrices, setExtraIngredientPrices] = useState(
    menuItem?.extraIngredientPrices || []
  );
  const [category, setCategory] = useState(menuItem?.category || '');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categories').then((response) => {
      response.json().then((categories) => {
        setCategories(categories);
      });
    });
  }, []);

  return (
    <form
      onSubmit={(e) =>
        onSubmit(e, {
          image,
          name,
          description,
          basePrice,
          sizes,
          extraIngredientPrices,
          category,
        })
      }
      className="mt-8 max-w-2xl mx-auto"
    >
      <div
        className="md:grid gap-4 items-start"
        style={{ gridTemplateColumns: '.3fr .7fr' }}
      >
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label>Menu item name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories?.length > 0 &&
              categories.map((c) => (
                <option key={c._id} value={c._id}>
                  {c.name}
                </option>
              ))}
          </select>
          <label>Base price</label>
          <input
            type="text"
            value={basePrice}
            onChange={(e) => setBasePrice(e.target.value)}
          />
          <MenuItemPriceProps
            props={sizes}
            setProps={setSizes}
            name={'Sizes'}
            addLabel={'Add item size'}
          />
          <MenuItemPriceProps
            props={extraIngredientPrices}
            setProps={setExtraIngredientPrices}
            name={'Extra ingredients'}
            addLabel={'Add ingredients prices'}
          />
          <button className="mb-2" type="submit">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

import Trash from '@/components/icons/Trash';
import Plus from '@/components/icons/Plus';
import ChevronDown from '@/components/icons/ChevronDown';
import ChevronUp from '@/components/icons/ChevronUp';
import { useState } from 'react';

export default function MenuItemPriceProps({
  props,
  setProps,
  name,
  addLabel,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function addProp() {
    setProps((oldProps) => {
      return [...oldProps, { name: '', price: 0 }];
    });
  }

  function editProp(e, idx, prop) {
    const newValue = e.target.value;
    setProps((prevSizes) => {
      const newSizes = [...prevSizes];
      newSizes[idx][prop] = newValue;
      return newSizes;
    });
  }

  function removeProp(idx) {
    setProps((prev) => prev.filter((v, i) => i !== idx));
  }

  return (
    <div className="bg-gray-200 p-2 rounded-md mb-2">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex p-1 border-0 justify-start"
        type="button"
      >
        {isOpen && <ChevronUp />}
        {!isOpen && <ChevronDown />}

        <span>{name}</span>
        <span>({props?.length})</span>
      </button>

      <div className={isOpen ? 'block' : 'hidden'}>
        {props?.length > 0 &&
          props.map((size, idx) => (
            <div key={idx} className="flex gap-2 items-end">
              <div>
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Size name"
                  value={size.name}
                  onChange={(e) => editProp(e, idx, 'name')}
                />
              </div>
              <div>
                <label>Extra price</label>
                <input
                  type="text"
                  placeholder="Extra price"
                  value={size.price}
                  onChange={(e) => editProp(e, idx, 'price')}
                />
              </div>
              <div>
                <button
                  type="button"
                  className="bg-white mb-2 px-2"
                  onClick={() => removeProp(idx)}
                >
                  <Trash />
                </button>
              </div>
            </div>
          ))}
        <button
          type="button"
          onClick={addProp}
          className="bg-white items-center"
        >
          <Plus className="h-4 w-4" /> <span>{addLabel}</span>
        </button>
      </div>
    </div>
  );
}

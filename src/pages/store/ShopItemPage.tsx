import ShopItem from '@/components/store/ShopItem';
import StoreMainProfile from '@/components/store/StoreMainProfile';

const ShopCharacterPage = () => {
  return (
    <div className="h-[calc(100vh-3.1875rem)] bg-Light_Layout-200 dark:bg-Dark_Layout-300 grow">
      <div className="h-[5.625rem] flex items-center justify-center text-[1.625rem] text-Light_CategoryText_Icon_Contents">
        스토어
      </div>
      <div className="flex flex-col px-[1.875rem] h-[calc(100vh-8.8125rem)]">
        <StoreMainProfile />
        <div className="flex-1 my-[2.3125rem] overflow-auto scroll">
          <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1.25rem] w-full py-[2.3125rem]">
            <ShopItem itemName={'AAA'} coinValue={100} isRare={true} />
            <ShopItem itemName={'BBB'} coinValue={200} isRare={true} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
            <ShopItem itemName={'CCC'} coinValue={300} isRare={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCharacterPage;

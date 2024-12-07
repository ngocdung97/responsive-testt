import { categorys } from "../data/data";

export const CategoryItem = ({
  category,
  isMobile = false,
}: {
  category: (typeof categorys)[number];
  isMobile?: boolean;
}) => {
  return (
    <div
      key={category.id}
      style={{
        width: isMobile ? "100%" : "490px",
        height: isMobile ? "100%" : "365px",
      }}
      className="flex-none grid grid-cols-2 gap-6 shadow-md rounded-[28px] bg-[#0000000D] p-5  hover:scale-105 transition duration-300 ease-in-out overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div
          style={{
            backgroundColor: category.color,
            width: isMobile ? "167px" : "210px",
            height: isMobile ? "167px" : "210px",
          }}
          className={`p-6 flex flex-col gap-4 text-white rounded-[20px]`}
        >
          <img
            src={category.icon}
            alt={category.name}
            style={{
              width: isMobile ? "16px" : "20px",
              height: isMobile ? "16px" : "20px",
            }}
            className="object-cover"
          />
          <div className={`${isMobile ? "text-lg" : "text-2xl"}opacity-80`}>
            {category.name}
          </div>
          <div className={`${isMobile ? "text-xs" : "text-sm"} opacity-60`}>
            {category.description}
          </div>
        </div>
        <div className="flex justify-between items-center">
          {category.rec?.map((rec, index) => (
            <img
              style={{
                width: isMobile ? "75px" : "95px",
                height: isMobile ? "75px" : "95px",
              }}
              className="w-[95px] h-[95px]"
              src={rec}
              alt={rec}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          {category.subRec?.map((rec, index) => (
            <img
              style={{
                width: isMobile ? "75px" : "95px",
                height: isMobile ? "75px" : "95px",
              }}
              className="w-[95px] h-[95px]"
              src={rec}
              alt={rec}
            />
          ))}
        </div>
        <img
          src={category.mainRec}
          alt={category.name}
          style={{
            backgroundColor: category.color,
            width: isMobile ? "167px" : "210px",
            height: isMobile ? "167px" : "210px",
          }}
          className="rounded-[20px] object-cover"
        />
      </div>
    </div>
  );
};

import Skeleton from "@mui/material/Skeleton";

//Компонент-заглушка для отображения серого,
//мерациющего пространства пока элемент не загружен
//componentIsReady: true || false
const SkeletonComp = ({ componentIsReady, children }) => {
  return (
    <>
      {componentIsReady ? (
        children
      ) : (
        <Skeleton variant="rectangular">{children}</Skeleton>
      )}
    </>
  );
};

export default SkeletonComp;

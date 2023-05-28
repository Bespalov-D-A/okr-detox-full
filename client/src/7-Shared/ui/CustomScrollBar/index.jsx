import { useEffect, useRef } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { theme } from "../../assests/mui/WithTheme";

//Кастомный скролбар, для компонентов с прокруткой
//Подстраивается под размер родителя
const CustomScrollBar = ({ children }) => {
  const scrollbarsRef = useRef(null);

  function scrollTo() {
    if (scrollbarsRef.current) {
      scrollbarsRef.current.scrollToBottom();
      scrollbarsRef.current.scrollToTop();
    }
  }

  useEffect(() => {
    let time = setTimeout(() => scrollTo(), 50);
    return () => clearTimeout(time);
  }, []);

  return (
    <Scrollbars
      ref={scrollbarsRef}
      autoHide={false}
      style={{ width: "100%", height: "100%" }}
      renderThumbVertical={(style, ...props) => (
        <div
          {...props}
          style={{
            ...style,
            backgroundColor: theme.palette.secondary.dark,
            position: "relative",
            zIndex: 10,
            opacity: "0.7",
          }}
        />
      )}
    >
      <div className="scrollbar-custom" style={{ padding: "0 24px 12px 0" }}>
        {children}
      </div>
    </Scrollbars>
  );
};

export default CustomScrollBar;

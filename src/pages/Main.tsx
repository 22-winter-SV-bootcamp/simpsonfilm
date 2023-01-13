import DragDropUpload from '@/components/main/DragDropUpload';
import RecentImgs from '@/components/main/RecentImgs';

const Main = () => {
  return (
    <div>
      {/* 슬라이드 그림 오는 자리 */}
      <RecentImgs></RecentImgs>
      {/* 업로드 버튼 오는 자리 */}
      <DragDropUpload></DragDropUpload>
      {/* 랭킹 보여주는 자리 */}
    </div>
  );
};

export default Main;

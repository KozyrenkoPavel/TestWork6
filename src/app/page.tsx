import ProtectedRoute from "../hoc/ProtectedRoute";
import HomePages from "../pages/HomePages";

export default function Home() {
  return (
    <ProtectedRoute>
      <div>
        <HomePages />
      </div>
    </ProtectedRoute>
  );
}

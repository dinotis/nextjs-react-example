import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Meetings } from "@/components/main/meeting/meetings";

export default function Home() {
  return (
    <div className="flex-col flex p-5">
      <Card>
        <CardHeader>
          <CardTitle>Meetings</CardTitle>
        </CardHeader>

        <CardContent>
          <Meetings />
        </CardContent>
      </Card>
    </div>
  );
}

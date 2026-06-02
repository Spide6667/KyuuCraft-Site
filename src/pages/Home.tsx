import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

function Home() {
  return (
    <>
      <div className="page-content-holder">
        <h1>Kyuucraft Website Home Page</h1>
        <Separator/>
        <p>
            CONTENT
        </p>
        <Link to ="/cmds">
          <Button>
            Server Cmd List
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
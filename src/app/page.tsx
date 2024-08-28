import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  //const { data: data } = await supabase.from("ENTRY_APP").select();

  return (
    <div className="w-full h-full">

    </div>
  );
}

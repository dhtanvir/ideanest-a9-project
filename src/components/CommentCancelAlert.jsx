"use client";

import { AlertDialog, Button } from "@heroui/react";
import { IoTrashBin } from "react-icons/io5";

export function CommentCancelAlert({ comment }) {
  console.log(" comment delete", comment);

  const {_id } = comment

  const handelDelete = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/comment/${_id}`,
      {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      },
    );
    const data = await res.json();
    

    console.log("data Id", data);
  };

  return (
    <AlertDialog>
      <Button variant="outline" className="bg-red-500 text-white">
        <IoTrashBin /> cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Your Comments permanently</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>This will permanently delete</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button onClick={handelDelete} slot="close" variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

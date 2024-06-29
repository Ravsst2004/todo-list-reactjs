const FormAddTodos = () => {
  return (
    <div>
      <form action="" className="my-1">
        <textarea
          type="text"
          className="w-full border-2 p-2 border-first rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="border-2 px-2 w-full border-first bg-second text-slate-100 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default FormAddTodos;

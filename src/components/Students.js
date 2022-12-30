import React from "react";
export const Students = ({ data }) => {
  return (
    <>
      <h4>Estudiantes</h4>
      <div className="centered">
        <section className="cards">
          {data?.students?.map((student) => (
            <article className="card" key={student?.id}>
              <p>
                {student?.name} tiene {student?.age} años
              </p>
              <p>{student?.department}</p>
              <p>{student?.course}</p>
            </article>
          ))}
        </section>
      </div>
    </>
  );
};

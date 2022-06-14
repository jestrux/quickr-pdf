import { h } from 'preact';

const SummaryDetail = ({
  label = "Key",
  value = "Value",
  noBorder = false,
}) => {
  return (
    <div className={`py-3.5 flex flex-col relative`}>
      <span className="opacity-70 p-0 text-lg leading-none mb-0.5">
        {label}
      </span>
      <span className="text-lg font-medium">{value}</span>
    </div>
  );
};

const SectionTable = ({ data }) => {
  return (
    <div className="mb-6">
      <table className="w-full text-left">
        <thead className="border-b border-gray-400">
          <tr>
            {data.header.map(({ en }, index) => (
              <th className="py-2 font-normal opacity-60 text-xl" key={index}>
                {en}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.body.map((row, index) => (
            <tr key={index}>
              {row.map(({ en }, index) => (
                <td key={index} className="py-3 border-b text-xl">
                  {en}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SectionWrapper = ({
  label = "Step 1",
  title = "Company details",
  subtitle,
  children,
}) => {
  return (
    <div className="border-t-[3px] border-primary pt-8 pb-4">
      <div className="col-span-4 px-4 lg:px-0">
        <h2 className="mb-0.5 text-2xl font-semibold">{title}</h2>

        {subtitle && (
          <p className="leading-relaxed opacity-70 text-xl">{subtitle}</p>
        )}
      </div>

      <div className="mt-3">{children}</div>
    </div>
  );
};

const Section = ({ data }) => {
  if (!data?.content) return null;

  const { header, body } = data.content;

  return (
    <SectionWrapper
      label="Step 1"
      title={header.title.en}
      subtitle={header.subtitle?.en}
    >
      {body &&
        body.map((row, index) => {
          // console.log("Row: ", row.content);

          if (row.type == "Table")
            return <SectionTable key={index} data={row.content} />;

          return (
            <div
              key={index}
              className={`
                grid
                ${row.content?.length == 2 && "grid-cols-2"}
                ${row.content?.length == 3 && "grid-cols-3"}
            `}
            >
              {row.content &&
                row.content.map((column, index) => {
                  return (
                    <SummaryDetail
                      key={index}
                      label={column.content.label.en}
                      value={column.content.value.en}
                    />
                  );
                })}
            </div>
          );
        })}
    </SectionWrapper>
  );
};

export default Section;

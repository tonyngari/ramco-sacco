import { BoardMemberCard } from '@/components/board-member-card';

export function Board() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Board & Management</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Non-Executive Directors</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BoardMemberCard
              name="Emmanuel Kyalo"
              position="Chairman"
            />
            <BoardMemberCard
              name="Lorna Kitema"
              position="Vice Chair Lady"
            />
            <BoardMemberCard
              name="Nicholas Ndaka"
              position="Treasurer"
            />
            <BoardMemberCard
              name="Kevin Ouma"
              position="Secretary"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Management Committee</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BoardMemberCard
              name="Phanuel Omoso"
              position="Director"
            />
            <BoardMemberCard
              name="David Kituta"
              position="Director"
            />
            <BoardMemberCard
              name="Edwin Owino"
              position="Director"
            />
            <BoardMemberCard
              name="Anthony Muli"
              position="Director"
            />
            <BoardMemberCard
              name="Jonathan Mutemi"
              position="Director"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Supervisory Committee</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BoardMemberCard
              name="Patrice Lumumba"
              position="Chairman"
            />
            <BoardMemberCard
              name="Peter Matera"
              position="Secretary"
            />
            <BoardMemberCard
              name="Jonathan Mutemi"
              position="Member"
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Management Staff</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <BoardMemberCard
              name="Pauline Kinyua"
              position="CEO"
            />
            <BoardMemberCard
              name="Grace Maina"
              position="Accountant"
            />
            <BoardMemberCard
              name="Caleb Nunda"
              position="Admin"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
"""migration added

Revision ID: d5641c6b627b
Revises: bf6f626ca5e4
Create Date: 2024-08-24 23:25:33.579855

"""
from alembic import op
import sqlalchemy as sa
import sqlmodel.sql.sqltypes


# revision identifiers, used by Alembic.
revision = 'd5641c6b627b'
down_revision = 'bf6f626ca5e4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('pref_jobtitle_user_id_fkey', 'pref_jobtitle', type_='foreignkey')
    op.drop_column('pref_jobtitle', 'user_id')
    op.drop_constraint('pref_jobtype_user_id_fkey', 'pref_jobtype', type_='foreignkey')
    op.drop_column('pref_jobtype', 'user_id')
    op.add_column('user_oauthtoken', sa.Column('expires_at', sa.DateTime(), nullable=True))
    op.drop_column('user_oauthtoken', 'email')
    op.drop_column('user_oauthtoken', 'full_name')
    op.drop_column('user_onboarding', 'h1b_bool')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user_onboarding', sa.Column('h1b_bool', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('user_oauthtoken', sa.Column('full_name', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.add_column('user_oauthtoken', sa.Column('email', sa.VARCHAR(), autoincrement=False, nullable=False))
    op.drop_column('user_oauthtoken', 'expires_at')
    op.add_column('pref_jobtype', sa.Column('user_id', sa.UUID(), autoincrement=False, nullable=False))
    op.create_foreign_key('pref_jobtype_user_id_fkey', 'pref_jobtype', 'user', ['user_id'], ['id'])
    op.add_column('pref_jobtitle', sa.Column('user_id', sa.UUID(), autoincrement=False, nullable=False))
    op.create_foreign_key('pref_jobtitle_user_id_fkey', 'pref_jobtitle', 'user', ['user_id'], ['id'])
    # ### end Alembic commands ###

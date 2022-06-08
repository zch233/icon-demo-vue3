// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DatabaseFilledSvg from '@ant-design/icons-svg/lib/asn/DatabaseFilled';

export interface DatabaseFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DatabaseFilled: DatabaseFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={DatabaseFilledSvg} />;

DatabaseFilled.displayName = 'DatabaseFilled';

export default DatabaseFilled;
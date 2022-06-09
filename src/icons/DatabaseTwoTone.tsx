// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import DatabaseTwoToneSvg from '@ant-design/icons-svg/lib/asn/DatabaseTwoTone';

export interface DatabaseTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const DatabaseTwoTone: DatabaseTwoToneIconType = (props, context) => <Icon name='DatabaseTwoTone' {...{ ...props, ...context.attrs }} icon={DatabaseTwoToneSvg} />;

DatabaseTwoTone.displayName = 'DatabaseTwoTone';

export default DatabaseTwoTone;
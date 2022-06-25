// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DatabaseTwoToneSvg from 'icon-base/es/asn/DatabaseTwoTone';

export interface DatabaseTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDatabaseTwoTone: DatabaseTwoToneIconType = (props, context) => (
    <Icon name='DatabaseTwoTone' {...{ ...props, ...context.attrs }} icon={DatabaseTwoToneSvg} />
);

IconDatabaseTwoTone.displayName = 'IconDatabaseTwoTone';
IconDatabaseTwoTone.theme = 'twotone';
IconDatabaseTwoTone.originName = 'database';

export default IconDatabaseTwoTone;

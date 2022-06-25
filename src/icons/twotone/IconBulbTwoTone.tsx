// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BulbTwoToneSvg from 'icon-base/es/asn/BulbTwoTone';

export interface BulbTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBulbTwoTone: BulbTwoToneIconType = (props, context) => <Icon name='BulbTwoTone' {...{ ...props, ...context.attrs }} icon={BulbTwoToneSvg} />;

IconBulbTwoTone.displayName = 'IconBulbTwoTone';
IconBulbTwoTone.theme = 'twotone';
IconBulbTwoTone.originName = 'bulb';

export default IconBulbTwoTone;

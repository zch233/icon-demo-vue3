// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BulbFilledSvg from 'icon-base/es/asn/BulbFilled';

export interface BulbFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBulbFilled: BulbFilledIconType = (props, context) => <Icon name='BulbFilled' {...{ ...props, ...context.attrs }} icon={BulbFilledSvg} />;

IconBulbFilled.displayName = 'IconBulbFilled';
IconBulbFilled.theme = 'filled';
IconBulbFilled.originName = 'bulb';

export default IconBulbFilled;

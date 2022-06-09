// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import BehanceOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceOutlined';

export interface BehanceOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const BehanceOutlined: BehanceOutlinedIconType = (props, context) => <Icon name='BehanceOutlined' {...{ ...props, ...context.attrs }} icon={BehanceOutlinedSvg} />;

BehanceOutlined.displayName = 'BehanceOutlined';

export default BehanceOutlined;
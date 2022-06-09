// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ArrowDownOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowDownOutlined';

export interface ArrowDownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ArrowDownOutlined: ArrowDownOutlinedIconType = (props, context) => <Icon name='ArrowDownOutlined' {...{ ...props, ...context.attrs }} icon={ArrowDownOutlinedSvg} />;

ArrowDownOutlined.displayName = 'ArrowDownOutlined';

export default ArrowDownOutlined;
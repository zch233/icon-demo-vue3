// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FundOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundOutlined';

export interface FundOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FundOutlined: FundOutlinedIconType = (props, context) => <Icon name='FundOutlined' {...{ ...props, ...context.attrs }} icon={FundOutlinedSvg} />;

FundOutlined.displayName = 'FundOutlined';

export default FundOutlined;
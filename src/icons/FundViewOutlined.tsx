// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import FundViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundViewOutlined';

export interface FundViewOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const FundViewOutlined: FundViewOutlinedIconType = (props, context) => <Icon name='FundViewOutlined' {...{ ...props, ...context.attrs }} icon={FundViewOutlinedSvg} />;

FundViewOutlined.displayName = 'FundViewOutlined';

export default FundViewOutlined;
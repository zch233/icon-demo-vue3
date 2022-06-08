// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import YahooOutlinedSvg from '@ant-design/icons-svg/lib/asn/YahooOutlined';

export interface YahooOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const YahooOutlined: YahooOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={YahooOutlinedSvg} />;

YahooOutlined.displayName = 'YahooOutlined';

export default FunctionalComponent;
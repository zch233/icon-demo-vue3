// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import CoffeeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CoffeeOutlined';

export interface CoffeeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const CoffeeOutlined: CoffeeOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={CoffeeOutlinedSvg} />;

CoffeeOutlined.displayName = 'CoffeeOutlined';

export default FunctionalComponent;
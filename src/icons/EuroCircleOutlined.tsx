// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import EuroCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EuroCircleOutlined';

export interface EuroCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const EuroCircleOutlined: EuroCircleOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={EuroCircleOutlinedSvg} />;

EuroCircleOutlined.displayName = 'EuroCircleOutlined';

export default FunctionalComponent;
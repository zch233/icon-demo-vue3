// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import PropertySafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/PropertySafetyOutlined';

export interface PropertySafetyOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const PropertySafetyOutlined: PropertySafetyOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={PropertySafetyOutlinedSvg} />;

PropertySafetyOutlined.displayName = 'PropertySafetyOutlined';

export default FunctionalComponent;
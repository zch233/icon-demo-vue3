// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ApartmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApartmentOutlined';

export interface ApartmentOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ApartmentOutlined: ApartmentOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ApartmentOutlinedSvg} />;

ApartmentOutlined.displayName = 'ApartmentOutlined';

export default ApartmentOutlined;
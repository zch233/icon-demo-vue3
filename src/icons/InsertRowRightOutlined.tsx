// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import InsertRowRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowRightOutlined';

export interface InsertRowRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const InsertRowRightOutlined: InsertRowRightOutlinedIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={InsertRowRightOutlinedSvg} />;

InsertRowRightOutlined.displayName = 'InsertRowRightOutlined';

export default InsertRowRightOutlined;